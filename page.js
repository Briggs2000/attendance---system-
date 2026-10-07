'use client';

import { useState } from 'react';

const groups = [
  'ICT CDS','PUBLICITY CDS','HEALTH CDS','CONSTRUCTION CDS',
  'SOCIAL WELFARE AND BEAUTIFICATION CDS','SANITATION CDS',
  'CULTURE AND TOURISM CDS','EDUCATION CDS','SPECIAL CDS','REPOSTING'
];

export default function Home() {
  const [registered, setRegistered] = useState(false);
  const [form, setForm] = useState({name:'', stateCode:'', group:''});
  const [attendance, setAttendance] = useState(false);

  function register(e) {
    e.preventDefault();
    if (!form.name || !form.stateCode || !form.group) return;
    setRegistered(true);
  }

  return (
    <main className="page">
      <section className="hero">
        <div className="badge">NYSC CDS ATTENDANCE</div>
        <h1>Real-Time Attendance</h1>
        <p>Register, check in and manage CDS attendance from your phone.</p>
      </section>

      {!registered ? (
        <section className="card">
          <h2>Corper Registration</h2>
          <p className="muted">Enter your details to continue.</p>
          <form onSubmit={register}>
            <label>Full Name<input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Enter full name"/></label>
            <label>State Code<input value={form.stateCode} onChange={e=>setForm({...form,stateCode:e.target.value.toUpperCase()})} placeholder="e.g. LA/25A/12345"/></label>
            <label>CDS Group<select value={form.group} onChange={e=>setForm({...form,group:e.target.value})}><option value="">Select group</option>{groups.map(g=><option key={g}>{g}</option>)}</select></label>
            <button>Register</button>
          </form>
        </section>
      ) : (
        <section className="card">
          <h2>Welcome, {form.name}</h2>
          <p><b>State Code:</b> {form.stateCode}</p>
          <p><b>CDS Group:</b> {form.group}</p>
          <div className={attendance ? "success" : "checkin"}>
            {attendance ? <><strong>Attendance recorded ✓</strong><span>Your attendance has been marked for this session.</span></> :
              <><strong>Ready for attendance</strong><span>Tap below to record your attendance.</span><button onClick={()=>setAttendance(true)}>Mark Attendance</button></>}
          </div>
          <button className="secondary" onClick={()=>{setRegistered(false);setAttendance(false)}}>Register another corper</button>
        </section>
      )}

      <footer>Project Executed By Briggs Obakam</footer>
    </main>
  );
}
