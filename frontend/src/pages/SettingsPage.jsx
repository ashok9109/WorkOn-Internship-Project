// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router";
// import { toast } from "react-toastify";
// // import axiosInstance from "../config/axiosinstance"; 

// // ---------- Helper API calls ----------
// const fetchDashboardSummary = async () => {
//   // returns { totalApplicants, totalPosts, activePosts, recentApplicants: [...] }
//   // const res = await axiosInstance.get("/api/dashboard/summary");
//   // return res.data;
  
// };

// const fetchMyPosts = async () => {
//   // const res = await axiosInstance.get("/api/job/my-posts");
//   // return res.data.jobs || [];
// };

// const deleteJobPost = async (jobId) => {
//   // const res = await axiosInstance.delete(`/api/job/delete/${jobId}`);
//   // return res.data;
// };

// const fetchMyApplicants = async () => {
//   // const res = await axiosInstance.get("/api/applicants/my-applicants");
//   // return res.data.applicants || [];
// };

// // Job Seeker endpoints
// const fetchAppliedJobs = async () => {
//   // const res = await axiosInstance.get("/api/applications/applied"); // implement on backend
//   // return res.data.applied || [];
// };
// const fetchSavedJobs = async () => {
//   // const res = await axiosInstance.get("/api/jobs/saved"); // implement on backend
//   // return res.data.saved || [];
// };
// const fetchRecommendedJobs = async () => {
//   // const res = await axiosInstance.get("/api/jobs/recommended"); // implement on backend
//   // return res.data.recommended || [];
// };
// const fetchProfileProgress = async () => {
//   // const res = await axiosInstance.get("/api/profile/progress"); // implement on backend
//   // return res.data || { percent: 0 };
// };

// // ---------- Small reusable UI parts ----------
// const StatCard = ({ label, value, accent = "bg-[#0A3D4C]" }) => (
//   <div className="p-4 rounded-lg shadow-sm bg-white border">
//     <div className={`inline-block px-3 py-1 rounded text-white text-sm ${accent} mb-2`}>
//       {label}
//     </div>
//     <div className="text-2xl font-bold mt-2">{value}</div>
//   </div>
// );

// const SmallButton = ({ children, onClick, variant = "primary" }) => {
//   const base = "px-3 py-1 rounded text-sm font-semibold";
//   if (variant === "danger") return <button onClick={onClick} className={`${base} text-red-600 bg-red-50 hover:bg-red-100`}>{children}</button>;
//   return <button onClick={onClick} className={`${base} text-white bg-[#0A3D4C] hover:bg-[#09505f]`}>{children}</button>;
// };

// // ---------- Employer Dashboard Component ----------
// const EmployerDashboard = ({ summary, refreshMyPosts, myPosts, applicants, onDelete }) => {
//   return (
//     <div className="space-y-6">
//       {/* top stats */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//         <StatCard label="Total Applicants" value={summary?.totalApplicants ?? 0} />
//         <StatCard label="Total Job Posts" value={summary?.totalPosts ?? 0} />
//         <StatCard label="Active Posts" value={summary?.activePosts ?? 0} />
//         <div className="p-4 rounded-lg shadow-sm bg-white border">
//           <div className="text-sm text-gray-500">Quick Actions</div>
//           <div className="mt-3 flex gap-2">
//             <Link to="/home/create-job" className="px-3 py-2 bg-green-600 text-white rounded">Create Job</Link>
//             <Link to="/home/my-posts" className="px-3 py-2 bg-blue-600 text-white rounded">Manage Posts</Link>
//           </div>
//         </div>
//       </div>

//       {/* Recent applicants */}
//       <div className="bg-white p-4 rounded-lg border">
//         <div className="flex justify-between items-center mb-3">
//           <h3 className="text-lg font-bold text-[#0A3D4C]">Recent Applicants</h3>
//           <Link to="/home/applicants" className="text-sm text-blue-600">View all</Link>
//         </div>

//         {!applicants?.length ? (
//           <div className="text-center text-gray-500 py-6">No recent applicants.</div>
//         ) : (
//           <div className="grid gap-3">
//             {applicants.slice(0, 5).map((a) => (
//               <div key={a._id} className="flex items-center justify-between p-3 rounded border bg-[#FAFEFF]">
//                 <div>
//                   <div className="font-semibold">{a.profile?.firstName} {a.profile?.lastName}</div>
//                   <div className="text-sm text-gray-600">{a.job?.title} • {a.profile?.email}</div>
//                 </div>
//                 <div className="flex gap-2 items-center">
//                   <a href={a.resumeUrl} target="_blank" rel="noreferrer" className="text-sm text-blue-600">Resume</a>
//                   <Link to={`/applicants/${a._id}`} className="text-sm text-green-600">Details →</Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* My posts table */}
//       <div className="bg-white p-4 rounded-lg border">
//         <div className="flex justify-between items-center mb-3">
//           <h3 className="text-lg font-bold text-[#0A3D4C]">My Job Posts</h3>
//           <SmallButton onClick={refreshMyPosts}>Refresh</SmallButton>
//         </div>

//         {!myPosts?.length ? (
//           <div className="text-center text-gray-500 py-6">No posts created yet.</div>
//         ) : (
//           <div className="overflow-x-auto">
//             <table className="min-w-full table-auto">
//               <thead>
//                 <tr className="text-left text-sm text-gray-500">
//                   <th className="p-2">Title</th>
//                   <th className="p-2">Location</th>
//                   <th className="p-2">Type</th>
//                   <th className="p-2">Salary</th>
//                   <th className="p-2">Posted</th>
//                   <th className="p-2">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {myPosts.map((job) => (
//                   <tr key={job._id} className="border-t">
//                     <td className="p-2">{job.title}</td>
//                     <td className="p-2">{job.location}</td>
//                     <td className="p-2">{job.jobType}</td>
//                     <td className="p-2">{job.salary}</td>
//                     <td className="p-2 text-sm text-gray-500">{new Date(job.createdAt).toLocaleDateString()}</td>
//                     <td className="p-2 flex gap-2">
//                       <Link to={`/jobs/${job._id}`} className="text-sm text-blue-600">View</Link>
//                       <Link to={`/home/edit-job/${job._id}`} className="text-sm text-yellow-600">Edit</Link>
//                       <button onClick={() => onDelete(job._id)} className="text-sm text-red-600">Delete</button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// // ---------- Job Seeker Dashboard Component ----------
// const JobSeekerDashboard = ({ profileProgress, appliedJobs, savedJobs, recommended }) => {
//   return (
//     <div className="space-y-6">
//       {/* Top row: Profile progress + quick cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <div className="p-4 rounded-lg shadow-sm bg-white border">
//           <div className="text-sm text-gray-500">Profile Completion</div>
//           <div className="mt-3">
//             <div className="w-full bg-gray-200 rounded h-3 overflow-hidden">
//               <div className="h-3 bg-[#0A3D4C]" style={{ width: `${profileProgress?.percent ?? 0}%` }} />
//             </div>
//             <div className="text-sm text-gray-600 mt-2">{profileProgress?.percent ?? 0}% completed</div>
//             <Link to="/home/profile" className="mt-3 inline-block text-sm text-blue-600">Complete profile</Link>
//           </div>
//         </div>

//         <div className="p-4 rounded-lg shadow-sm bg-white border">
//           <div className="text-sm text-gray-500">Applied Jobs</div>
//           <div className="mt-3 text-2xl font-bold">{appliedJobs?.length ?? 0}</div>
//           <Link to="/home/applied" className="text-sm text-blue-600 mt-2 inline-block">View applied jobs</Link>
//         </div>

//         <div className="p-4 rounded-lg shadow-sm bg-white border">
//           <div className="text-sm text-gray-500">Saved Jobs</div>
//           <div className="mt-3 text-2xl font-bold">{savedJobs?.length ?? 0}</div>
//           <Link to="/home/saved" className="text-sm text-blue-600 mt-2 inline-block">View saved</Link>
//         </div>
//       </div>

//       {/* Lists: applied + recommended */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <div className="bg-white p-4 rounded-lg border">
//           <h3 className="font-bold text-[#0A3D4C] mb-3">Recently Applied</h3>
//           {!appliedJobs?.length ? (
//             <div className="text-gray-500">You haven't applied to any jobs yet.</div>
//           ) : (
//             <div className="space-y-3">
//               {appliedJobs.slice(0, 6).map((a) => (
//                 <div key={a._id} className="p-3 rounded border bg-[#FAFEFF] flex justify-between">
//                   <div>
//                     <div className="font-semibold">{a.job?.title}</div>
//                     <div className="text-sm text-gray-600">{a.job?.company}</div>
//                   </div>
//                   <div className="text-sm text-gray-500">{new Date(a.appliedAt).toLocaleDateString()}</div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         <div className="bg-white p-4 rounded-lg border">
//           <h3 className="font-bold text-[#0A3D4C] mb-3">Recommended for you</h3>
//           {!recommended?.length ? (
//             <div className="text-gray-500">No recommendations yet.</div>
//           ) : (
//             <div className="space-y-3">
//               {recommended.slice(0, 6).map((job) => (
//                 <Link key={job._id} to={`/jobs/${job._id}`} className="block p-3 rounded border hover:shadow-sm">
//                   <div className="font-semibold">{job.title}</div>
//                   <div className="text-sm text-gray-600">{job.company} • {job.location}</div>
//                 </Link>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// // ---------- Main Dashboard Page ----------
// const SettingsPage = () => {
//   const [loading, setLoading] = useState(true);
//   const [role, setRole] = useState(null); 
//   const [summary, setSummary] = useState(null);
//   const [myPosts, setMyPosts] = useState([]);
//   const [applicants, setApplicants] = useState([]);
//   const [appliedJobs, setAppliedJobs] = useState([]);
//   const [savedJobs, setSavedJobs] = useState([]);
//   const [recommended, setRecommended] = useState([]);
//   const [profileProgress, setProfileProgress] = useState({ percent: 0 });
//   const navigate = useNavigate();


//   const {user} = useSelector((state)=> state.user);
 
//   useEffect(() => {
//   if (user && user.role) {
//     setRole(user.role);
//   }
// }, [user]);


//   useEffect(() => {
//     let mounted = true;
//     const loadData = async () => {
//       setLoading(true);
//       try {
//         // common summary (for employer)
//         if (role === "Employer") {
//           const s = await fetchDashboardSummary().catch(() => ({}));
//           const posts = await fetchMyPosts().catch(() => []);
//           const apps = await fetchMyApplicants().catch(() => []);
//           if (!mounted) return;
//           setSummary(s);
//           setMyPosts(posts);
//           setApplicants(apps);
//         }

//         if (role === "Job Seeker") {
//           const applied = await fetchAppliedJobs().catch(() => []);
//           const saved = await fetchSavedJobs().catch(() => []);
//           const rec = await fetchRecommendedJobs().catch(() => []);
//           const prog = await fetchProfileProgress().catch(() => ({ percent: 0 }));
//           if (!mounted) return;
//           setAppliedJobs(applied);
//           setSavedJobs(saved);
//           setRecommended(rec);
//           setProfileProgress(prog);
//         }
//       } catch (err) {
//         console.error("Dashboard load error", err);
//       } finally {
//         if (mounted) setLoading(false);
//       }
//     };

//     loadData();
//     return () => { mounted = false; };
//   }, [role]);

//   // refresh my posts
//   const refreshMyPosts = async () => {
//     try {
//       const posts = await fetchMyPosts();
//       setMyPosts(posts);
//       toast.success("Refreshed posts");
//     } catch (err) {
//       console.log(err);
//       toast.error("Failed to refresh");
//     }
//   };

//   const handleDelete = async (jobId) => {
//     if (!window.confirm("Delete this job post? This action is permanent.")) return;
//     try {
//       await deleteJobPost(jobId);
//       toast.success("Job deleted");
//       // refresh
//       refreshMyPosts();
//     } catch (err) {
//       console.log("Delete error", err);
//       toast.error("Failed to delete");
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-[60vh] flex items-center justify-center">
//         <div className="text-lg text-gray-500">Loading dashboard...</div>
//       </div>
//     );
//   }

//   // if no role, redirect to home
//   if (!role) {
//     return (
//       <div className="min-h-[60vh] flex items-center justify-center">
//         <div>
//           <p className="mb-4 text-center">No role detected — please login.</p>
//           <div className="text-center">
//             <button onClick={() => navigate("/")} className="px-4 py-2 bg-[#0A3D4C] text-white rounded">Go to Login</button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8">
//       <h1 className="text-4xl font-bold text-[#0A3D4C] mb-6">Dashboard</h1>

//       {role === "Employer" && (
//         <EmployerDashboard
//           summary={summary}
//           myPosts={myPosts}
//           applicants={applicants}
//           refreshMyPosts={refreshMyPosts}
//           onDelete={handleDelete}
//         />
//       )}

//       {role === "Job Seeker" && (
//         <JobSeekerDashboard
//           profileProgress={profileProgress}
//           appliedJobs={appliedJobs}
//           savedJobs={savedJobs}
//           recommended={recommended}
//         />
//       )}
//     </div>
//   );
// };

// export default SettingsPage;
import React from 'react'

const SettingsPage = () => {
  return (
    <div>
      
    </div>
  )
}

export default SettingsPage;
