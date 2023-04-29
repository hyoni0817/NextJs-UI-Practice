import React from 'react';

const ProfileSubmit = () => {
  return (
    <div>
      <form action="http://localhost:5555/profile" method="post" enctype="multipart/form-data">
        <input type="text" name="nickname" />
        <button type="submit">제출</button>
      </form>
    </div>
  );
};

export default ProfileSubmit;
