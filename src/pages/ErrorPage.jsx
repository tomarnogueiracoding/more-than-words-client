import React from 'react';

function ErrorPage() {
  return (
    <div className="hero min-h-screen bg-gradient-to-r from-amber-400 to-amber-300 ">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-7xl font-bold ">404 This Page Does Not Exist</h1>
          <br />
          <hr />
          <br />
          <p className="py-2 text-3xl font-bold">
            "Pikachu is the best Pokemon Ever"
          </p>
          <p className="py-2 text-2xl font-bold">André Ferreira</p>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
