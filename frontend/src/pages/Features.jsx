import React from "react";
import news from "../assets/news.png";
import leaves from "../assets/leaves.png";
import location from "../assets/location.png";
import payroll from "../assets/payroll.png";
import salarySlip from "../assets/salary-slip.png";
import increment from "../assets/increment.png";
import expenseManagement from "../assets/expense-management.png";
import offboarding from "../assets/offboarding.png";
import surveyForm from "../assets/survey-form.png";



const employeeFeatures = [
  {
    title: "News",
    img: news,
    desc: "Stay updated with the latest company announcements and updates across the organization."
  },
  {
    title: "Leaves/Attendance",
    img: leaves,
    desc: "Manage employee leave requests and track daily attendance in a simple and organized way."
  },
  {
    title: "Location Based Employee",
    img: location,
    desc: "Monitor employee presence and activities based on their location with ease."
  }
];

const payrollFeatures = [
  {
    title: "Once Click Payroll",
    img: payroll,
    desc: "Generate complete payroll reports for employees with a single click."
  },
  {
    title: "Salary-Slips",
    img: salarySlip,
    desc: "Automatically generate and distribute salary slips to employees."
  },
  {
    title: "Increment/Promotion",
    img: increment,
    desc: "Track employee increments and promotions with proper records."
  }
];

const accountingFeatures = [
  {
    title: "Expense Management",
    img: expenseManagement,
    desc: "Track and manage company expenses effectively."
  },
  {
    title: "Offboarding",
    img: offboarding,
    desc: "Simplify the employee exit process with organized offboarding."
  },
  {
    title: "Survey Forms",
    img: surveyForm,
    desc: "Collect employee feedback using customizable survey forms."
  }
];

const FeatureCard = ({ img, title, desc }) => {
  return (
    <div className="feature-card">
      <img src={img} alt={title} className="feature-img" />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

const FeatureSection = ({ heading, subHeading, data }) => {
  return (
    <section className="feature-section">
      <h2>{heading}</h2>
      <p className="feature-subtitle">{subHeading}</p>

      <div className="feature-grid">
        {data.map((item, index) => (
          <FeatureCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <div className="features-page">

      <FeatureSection
        heading="Employee / Staff Management"
        subHeading="Manage your company employees with attendance, leaves and assets."
        data={employeeFeatures}
      />

      <FeatureSection
        heading="Payroll / Salary Management"
        subHeading="Manage your company employee salary in an easy way."
        data={payrollFeatures}
      />

      <FeatureSection
        heading="Accounting"
        subHeading="Manage company accounts and expenses efficiently."
        data={accountingFeatures}
      />

      {/* Connect Section */}
      <section className="connect-section">
        <h2>Connect with experts</h2>
        <p>
          Get assistance and support from experienced professionals to improve your HR workflow.
        </p>

        <div className="stats">
          <div>
            <h3>195+</h3>
            <p>Successful Projects</p>
          </div>

          <div>
            <h3>23 Years</h3>
            <p>Experienced Experts</p>
          </div>

          <div>
            <h3>98.99%</h3>
            <p>Success Rate</p>
          </div>
        </div>

        <div className="subscribe">
          <input type="email" placeholder="Enter email to get started" />
          <button>Join Now</button>
        </div>
      </section>

    </div>
  );
};

export default Features;