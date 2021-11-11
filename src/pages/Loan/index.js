import React from "react";
import Styles from "./Loan.module.css";
import Tap from "../../assets/icon/tap.svg";
import Collection from "../../assets/icon/collection.svg";
import GetMoney from "../../assets/icon/get-money.svg";
import MoneyBack from "../../assets/icon/money-back.svg";

function Loan() {
  const features = [
    {
      title: "Online request",
      desc: "All registration steps, including authentication and verification of bank records, will be in absentia.",
      icon: Tap,
    },
    {
      title: "Choose the best loan",
      desc: "There are different types of loans available depending on your needs. Which loan you can get will depend on your financial situation…",
      icon: Collection,
    },
    {
      title: "Get credit quickly",
      desc: "There are different types of loans available depending on your needs. Which loan you can get will depend on your financial situation…",
      icon: GetMoney,
    },
    {
      title: "Easy refund",
      desc: "There are different types of loans available depending on your needs. Which loan you can get will depend on your financial situation…",
      icon: MoneyBack,
    },
  ];

  const steps = [
    {
      title: "Register",
      desc: 'Enter the Pay+ application and in the "Installment Purchase" section, after selecting the loan, fill in the information about the name, surname and national code.',
    },
    {
      title: "Validation",
      desc: "In this step, complete the personal information and contact information license, and complete the authentication steps.",
    },
    {
      title: "Upload documents",
      desc: "Upload the image of the requested documents.",
    },
    {
      title: "Providing collateral",
      desc: "Upon initial confirmation of the documents, our partners will contact you via SMS and phone call to receive the guarantee.",
    },
    {
      title: "Receiving Credit",
      desc: "after receiving the guarantee, you will be provided with the use of Pay+ credit in the shortest possible time.",
    },
  ];

  return (
    <div className={Styles.main}>
      <div className={Styles.features}>
        {features.map((feature) => (
          <Feature
            title={feature.title}
            icon={feature.icon}
            desc={feature.desc}
            key={feature.title}
          />
        ))}
      </div>
      <div className={Styles.steps}>
        <h1 className={Styles.heading}>Steps to get credit</h1>
        <div className={Styles.timeline}>
          {steps.map((step) => {
            return (
              <Step
                number={steps.indexOf(step) + 1}
                title={step.title}
                desc={step.desc}
                key={step.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className={Styles.feature}>
      <img src={icon} alt="Feature" className={Styles.featureIcon} />
      <h1 className={Styles.featureHeading}>{title}</h1>
      <p className={Styles.featureSubhead}>{desc}</p>
    </div>
  );
}

function Step({ number, title, desc }) {
  return (
    <div className={Styles.step}>
      <div className={Styles.stepNumber}>{number}</div>
      <h1 className={Styles.stepHeading}>{title}</h1>
      <p className={Styles.stepSubheading}>{desc}</p>
    </div>
  );
}

export default Loan;
