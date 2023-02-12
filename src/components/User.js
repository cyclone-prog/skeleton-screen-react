import { useEffect, useState } from "react";
import SkeletonUser from "../skeletons/SkeletonUser";
const Users = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const data = await res.json();
      setProfile(data);
    }, 2000);
  }, []);
  return (
    <div className="users">
      <h2>Users</h2>
      {profile && (
        <div className="profile">
          <h3>{profile.username}</h3>
          <p>{profile.email}</p>
          <a href={profile.website}>{profile.website}</a>
        </div>
      )}
      {!profile && <SkeletonUser />}
    </div>
  );
};
export default Users;
