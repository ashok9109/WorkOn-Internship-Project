import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
// If you have an axiosInstance that already sets baseURL & withCredentials, use that instead
// import { axiosInstance } from '../config/axiosinstance';

const JOB_TYPES = ["Full-Time", "Part-Time", "Internship", "Remote"];
const QUALIFICATIONS = ["Bachelor Degree", "Master's Degree", "Diploma"];

const SettingsPage = () => {
  const navigate = useNavigate();
  const [skills, setSkills] = useState([]); // chip list
  const [skillInput, setSkillInput] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  // Helpers for skill chips
  const addSkill = (raw) => {
    if (!raw) return;
    // accept comma separated values too
    const list = raw
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    const newSkills = Array.from(new Set([...skills, ...list])); // unique
    setSkills(newSkills);
    setSkillInput("");
    clearErrors("skills");
  };

  const removeSkill = (skill) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  const onSubmit = async (data) => {
    // strong validation that depends on skills and dueDate (future)
    if (!skills.length) {
      setError("skills", { type: "manual", message: "At least one skill is required." });
      return;
    }

    // due date validation (if provided)
    if (data.dueDate) {
      const selected = new Date(data.dueDate);
      const now = new Date();
      // compare only date portion (allow same-day? we require future strictly)
      if (!(selected > now)) {
        setError("dueDate", { type: "manual", message: "Due date must be a future date." });
        return;
      }
    }

    // salary numeric validation - allow numbers with optional separators (50000 or 5,00,000)
    const salaryDigits = data.salary.replace(/[^0-9]/g, "");
    if (!salaryDigits) {
      setError("salary", { type: "manual", message: "Salary must contain digits." });
      return;
    }

    const payload = {
      title: data.title.trim(),
      company: data.company.trim(),
      location: data.location.trim(),
      salary: data.salary.trim(),
      jobType: data.jobType,
      qualification: data.qualification,
      experience: data.experience?.trim() || "Fresher",
      skills,
      description: data.description.trim(),
      dueDate: data.dueDate || null,
    };

    try {
      setLoading(true);

      // use axiosInstance if available in your project, else default axios
      const token = localStorage.getItem("token");
      const headers = token ? { Authorization: `Bearer ${token}` } : {};

      const res = await axios.post(
        "http://localhost:3000/api/jobs/create",
        payload,
        { headers }
      );

      toast.success(res.data?.message || "Job posted successfully ✅");
      reset();
      setSkills([]);
      navigate("/jobs"); // change route as per your app
    } catch (err) {
      console.error("Create Job Error:", err);
      const msg =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        "Server error while creating job";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-start justify-center py-12 px-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-6">
          <h1 className="text-white text-2xl font-semibold text-center">
            Create Job Posting
          </h1>
          <p className="text-blue-100 mt-1 text-sm text-center">
            Post a role to attract top talent — employers & admins only
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-6 grid gap-4"
          noValidate
        >
          {/* Row 1 - Title */}
          <div>
            <label className="block text-sm font-medium text-slate-700">Job Title</label>
            <input
              type="text"
              placeholder="e.g. Frontend Engineer"
              className={`mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 ${
                errors.title ? "border-rose-500 focus:ring-rose-200" : "border-slate-200 focus:ring-blue-200"
              }`}
              {...register("title", {
                required: "Job title is required",
                minLength: { value: 3, message: "Minimum 3 characters" },
              })}
            />
            {errors.title && <p className="text-rose-600 text-sm mt-1">{errors.title.message}</p>}
          </div>

          {/* Company / Location / Salary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div>
              <label className="block text-sm font-medium text-slate-700">Company</label>
              <input
                type="text"
                placeholder="Company name"
                className={`mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 ${
                  errors.company ? "border-rose-500 focus:ring-rose-200" : "border-slate-200 focus:ring-blue-200"
                }`}
                {...register("company", { required: "Company is required" })}
              />
              {errors.company && <p className="text-rose-600 text-sm mt-1">{errors.company.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Location</label>
              <input
                type="text"
                placeholder="City, e.g. Bangalore"
                className={`mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 ${
                  errors.location ? "border-rose-500 focus:ring-rose-200" : "border-slate-200 focus:ring-blue-200"
                }`}
                {...register("location", {
                  required: "Location is required",
                  minLength: { value: 3, message: "Minimum 3 characters" },
                  pattern: {
                    value: /^[A-Za-z0-9\s,.-]+$/,
                    message: "Invalid characters in location",
                  },
                })}
              />
              {errors.location && <p className="text-rose-600 text-sm mt-1">{errors.location.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Salary</label>
              <input
                type="text"
                placeholder="e.g. 1200000 or 12,00,000"
                className={`mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 ${
                  errors.salary ? "border-rose-500 focus:ring-rose-200" : "border-slate-200 focus:ring-blue-200"
                }`}
                {...register("salary", {
                  required: "Salary is required",
                  validate: (v) => {
                    const digits = v.replace(/[^0-9]/g, "");
                    return digits.length > 0 || "Salary must contain numbers";
                  },
                })}
              />
              {errors.salary && <p className="text-rose-600 text-sm mt-1">{errors.salary.message}</p>}
            </div>
          </div>

          {/* Job Type / Qualification / Experience */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div>
              <label className="block text-sm font-medium text-slate-700">Job Type</label>
              <select
                className={`mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 ${
                  errors.jobType ? "border-rose-500 focus:ring-rose-200" : "border-slate-200 focus:ring-blue-200"
                }`}
                defaultValue=""
                {...register("jobType", {
                  required: "Job Type is required",
                  validate: (v) => JOB_TYPES.includes(v) || "Invalid Job Type",
                })}
              >
                <option value="">Select Job Type</option>
                {JOB_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              {errors.jobType && <p className="text-rose-600 text-sm mt-1">{errors.jobType.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Qualification</label>
              <select
                className={`mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 ${
                  errors.qualification ? "border-rose-500 focus:ring-rose-200" : "border-slate-200 focus:ring-blue-200"
                }`}
                defaultValue=""
                {...register("qualification", {
                  required: "Qualification is required",
                  validate: (v) => QUALIFICATIONS.includes(v) || "Invalid qualification",
                })}
              >
                <option value="">Select Qualification</option>
                {QUALIFICATIONS.map((q) => (
                  <option key={q} value={q}>
                    {q}
                  </option>
                ))}
              </select>
              {errors.qualification && <p className="text-rose-600 text-sm mt-1">{errors.qualification.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Experience</label>
              <input
                type="text"
                placeholder="e.g. 0-1 years or 2 years"
                className="mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 border-slate-200 focus:ring-blue-200"
                {...register("experience", {
                  validate: (v) => {
                    if (!v) return true;
                    // allow "Fresher", "0-1", "2 years", "2-4 years" etc.
                    const ok = /^([0-9]+(-[0-9]+)?\s*(years?)?|Fresher)$/i.test(v);
                    return ok || "Invalid experience format";
                  },
                })}
              />
              {errors.experience && <p className="text-rose-600 text-sm mt-1">{errors.experience.message}</p>}
            </div>
          </div>

          {/* Skills chips */}
          <div>
            <label className="block text-sm font-medium text-slate-700">Skills</label>
            <div className="mt-1 flex gap-2 items-center">
              <input
                type="text"
                placeholder="Add skill and press Enter or comma"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addSkill(skillInput);
                  }
                  if (e.key === ",") {
                    e.preventDefault();
                    addSkill(skillInput);
                  }
                }}
                className="flex-1 rounded-md border px-3 py-2 focus:outline-none focus:ring-2 border-slate-200 focus:ring-blue-200"
              />
              <button
                type="button"
                onClick={() => addSkill(skillInput)}
                className="px-3 py-2 bg-blue-600 text-white rounded-md"
              >
                Add
              </button>
            </div>

            {/* chips */}
            <div className="mt-2 flex flex-wrap gap-2">
              {skills.length ? (
                skills.map((s) => (
                  <div key={s} className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full border">
                    <span className="text-sm">{s}</span>
                    <button
                      type="button"
                      onClick={() => removeSkill(s)}
                      className="text-blue-500 hover:text-blue-700 ml-1"
                    >
                      ✕
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-sm text-slate-400">No skills yet — add at least one</p>
              )}
            </div>

            {errors.skills && <p className="text-rose-600 text-sm mt-1">{errors.skills.message}</p>}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-slate-700">Description</label>
            <textarea
              placeholder="Full job description (responsibilities, perks, expectations...)"
              className={`mt-1 block w-full rounded-md border px-3 py-2 min-h-[110px] focus:outline-none focus:ring-2 ${
                errors.description ? "border-rose-500 focus:ring-rose-200" : "border-slate-200 focus:ring-blue-200"
              }`}
              {...register("description", {
                required: "Description is required",
                minLength: { value: 20, message: "Description must be at least 20 characters" },
              })}
            />
            {errors.description && <p className="text-rose-600 text-sm mt-1">{errors.description.message}</p>}
          </div>

          {/* Due Date */}
          <div>
            <label className="block text-sm font-medium text-slate-700">Application Due Date (optional)</label>
            <input
              type="date"
              className={`mt-1 block w-auto rounded-md border px-3 py-2 focus:outline-none focus:ring-2 ${
                errors.dueDate ? "border-rose-500 focus:ring-rose-200" : "border-slate-200 focus:ring-blue-200"
              }`}
              {...register("dueDate")}
            />
            {errors.dueDate && <p className="text-rose-600 text-sm mt-1">{errors.dueDate.message}</p>}
          </div>

          {/* Submit */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-md text-white font-medium transition ${
                loading ? "bg-blue-300 cursor-wait" : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Posting...
                </>
              ) : (
                "Post Job"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SettingsPage;
