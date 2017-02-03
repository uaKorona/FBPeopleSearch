import React from 'react';
import { Link } from 'react-router';

export default function PageNotFound() {
  return (
    <div>
      Page not found. Back to <Link to="/">Home</Link>
    </div>
  );
}
