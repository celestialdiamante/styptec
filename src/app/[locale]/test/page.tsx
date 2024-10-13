"use client"
import React from 'react';

const percents = {
  premium: 3,        // Discount for premium members
  pension: 26.23,    // Pension deduction
  pff: 6,            // PFF deduction
  social: 11.15,     // Social charges
  serviceCharge: 10  // Service charge deduction
};

export default function Test () {
  const [membershipType, setMembership] = React.useState<string>('basic');

  const [hourlyRate, setHourlyRate] = React.useState<number | ''>('');
  const [workingHours, setWorkingHours] = React.useState<number | ''>('');

  const [pension, setPension] = React.useState<boolean>(false);
  const [pff, setPFF] = React.useState<boolean>(false);
  const [socialCharges, setSocialCharges] = React.useState<boolean>(false);

  const [invoiceAmount, setInvoiceAmount] = React.useState<number>(0);
  const [grossIncome, setGrossIncome] = React.useState<number>(0);
  const [netPayable, setNetPayable] = React.useState<number>(0);

  // Handle checkbox changes
  function changeCheckbox(event: React.ChangeEvent<HTMLInputElement>) {
    const targetName = event.target.name;
    const targetValue = event.target.checked;

    if (targetName === 'pension') {
      setPension(targetValue);
    } else if (targetName === 'pff') {
      setPFF(targetValue);
    } else if (targetName === 'socialCharges') {
      setSocialCharges(targetValue);
    }
  }

  // Effect to update calculations when any relevant value changes
  React.useEffect(() => {
    if (typeof hourlyRate === 'number' && typeof workingHours === 'number' && hourlyRate > 0 && workingHours > 0) {
      // Calculate the initial invoice amount
      const newInvoiceAmount = hourlyRate * workingHours;
      setInvoiceAmount(newInvoiceAmount);

      const percent = newInvoiceAmount / 100;
      const serviceCharge = percents.serviceCharge * percent;

      // Calculate gross income after service charge deduction
      const newGrossIncome = newInvoiceAmount - serviceCharge;
      setGrossIncome(newGrossIncome);

      const grossPercent = newGrossIncome / 100;

      let otherDeductions = 0;

      // Calculate pension charges
      if (pension) {
        otherDeductions += percents.pension * grossPercent;
      }

      // Calculate PFF charges
      if (pff) {
        otherDeductions += percents.pff * grossPercent;
      }

      // Calculate social charges
      if (socialCharges) {
        otherDeductions += percents.social * grossPercent;
      }

      // Calculate net payable after deductions
      let newNetPayable = newGrossIncome - otherDeductions;

      // Apply premium membership discount if applicable
      if (membershipType === 'premium') {
        const premiumDiscount = percents.premium * grossPercent;
        newNetPayable += premiumDiscount;
      }

      // Set the final net payable amount
      setNetPayable(newNetPayable);
    }
  }, [hourlyRate, workingHours, pension, pff, socialCharges, membershipType]);

  return (
    <div>
      <h2>Invoice and Income Calculation</h2>

      <div>
        <label>Hourly Rate:</label>
        <input
          type="number"
          value={hourlyRate}
          onChange={(e) => setHourlyRate(parseFloat(e.target.value))}
        />
      </div>

      <div>
        <label>Working Hours:</label>
        <input
          type="number"
          value={workingHours}
          onChange={(e) => setWorkingHours(parseFloat(e.target.value))}
        />
      </div>

      <div>
        <label>Membership Type:</label>
        <select
          value={membershipType}
          onChange={(e) => setMembership(e.target.value)}
        >
          <option value="basic">Basic</option>
          <option value="premium">Premium</option>
        </select>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="pension"
            checked={pension}
            onChange={changeCheckbox}
          />
          Pension
        </label>

        <label>
          <input
            type="checkbox"
            name="pff"
            checked={pff}
            onChange={changeCheckbox}
          />
          PFF
        </label>

        <label>
          <input
            type="checkbox"
            name="socialCharges"
            checked={socialCharges}
            onChange={changeCheckbox}
          />
          Social Charges
        </label>
      </div>

      <div>
        <h3>Results</h3>
        <p>Invoice Amount: {invoiceAmount.toFixed(2)}</p>
        <p>Gross Income: {grossIncome.toFixed(2)}</p>
        <p>Net Payable: {netPayable.toFixed(2)}</p>
      </div>
    </div>
  );
}
