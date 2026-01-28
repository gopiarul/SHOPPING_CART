import React from "react";


function CustomerSupport() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="support-hero">
        <div className="container text-center">
          <p className="support-subtitle">We’re here to help</p>

          <h1 className="support-title">
            How can we help you today?
          </h1>

          <p className="support-text">
            Find answers to your questions about orders, payments, refunds,
            and account management.
          </p>

          <div className="support-search">
            <input
              type="text"
              placeholder="Search help articles..."
            />
            <button>Search</button>
          </div>
        </div>
      </section>

      {/* SUPPORT CATEGORIES */}
      <section className="support-categories">
        <div className="container">
          <div className="row g-4">

            <SupportCard
              icon="bi-person-circle"
              title="My Account"
              desc="Manage login, OTP, and profile details"
            />

            <SupportCard
              icon="bi-credit-card"
              title="Payments & Refunds"
              desc="Payment issues, refunds, and billing"
            />

            <SupportCard
              icon="bi-bag-check"
              title="Orders"
              desc="Track, cancel, and manage your orders"
            />

            <SupportCard
              icon="bi-cart"
              title="Cart & Checkout"
              desc="Cart issues and checkout support"
            />

            <SupportCard
              icon="bi-truck"
              title="Shipping"
              desc="Delivery timelines and shipping info"
            />

            <SupportCard
              icon="bi-shield-check"
              title="Security"
              desc="Account safety and OTP verification"
            />

            <SupportCard
              icon="bi-arrow-repeat"
              title="Returns"
              desc="Return policy and product replacement"
            />

            <SupportCard
              icon="bi-info-circle"
              title="General Help"
              desc="Other questions and platform usage"
            />

          </div>
        </div>
      </section>
    </>
  );
}

function SupportCard({ icon, title, desc }) {
  return (
    <div className="col-6 col-md-3">
      <div className="support-card">
        <i className={`bi ${icon}`}></i>
        <h6>{title}</h6>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default CustomerSupport;
