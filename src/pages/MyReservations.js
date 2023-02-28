import React from 'react';
import { useSelector } from 'react-redux';

const MyReservations = () => {
  // const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
  console.log(user);
  return (
    <div>
      <h1>List of reservations</h1>

    </div>
  );
};

export default MyReservations;
