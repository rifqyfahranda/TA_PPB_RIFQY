import React from 'react'
import './profile.css'

export default function ProfilePage() {
  return (
    <main>
      <div className="card">
        <img
          src="https://pbs.twimg.com/media/F_TGWRBboAAVYNp?format=jpg&name=large"
          alt=""
          style={{ width: '100%', borderRadius: '100' }}
        />
        <h1>Rifqy Fahranda</h1>
        <p className="title">21120121140102</p>
        <p>
          Udah 3 kali ganti project gagal karna api nya cacat, jadi mohon
          dimaafkan kalo programnya simpel bgt, yg penting api nya jalan
        </p>
      </div>
    </main>
  )
}
