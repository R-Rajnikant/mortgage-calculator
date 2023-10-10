import React, { Fragment } from 'react'
import SliderComponentt from './common/SliderComponentt'


const SliderSelect = ({ data, setData }) => {

  return (
    <>

      <SliderComponentt
        label="Home Value"
        min={1000}
        max={5000}
        defaultValue={data.homeValue}
        value={data.homeValue}
        step={100}
        onChange={(e, value) => setData({
          ...data,
          downPayment: value * 0.2,
          loanAmount: value * 0.8,

          homeValue: value
        })}
        unit="$"
        amount={data.homeValue}

      />
      <SliderComponentt
        label="Down Payment"
        min={0}
        max={data.homeValue}
        defaultValue={data.downPayment}
        value={data.downPayment}
        step={100}
        onChange={(e, value) => setData({
          ...data,
          loanAmount: [data.homeValue - data.downPayment],
          downPayment: value
        })}
        unit="$"
        amount={data.downPayment}
      />
      <SliderComponentt
        label="Loan"
        min={0}
        max={data.homeValue}
        defaultValue={data.loanAmount}
        value={data.loanAmount}
        step={100}
        onChange={(e, value) => setData({
          ...data,
          downPayment: [data.homeValue - data.loanAmount],
          loanAmount: value
        })}
        unit="$"
        amount={data.loanAmount}
      />
      <SliderComponentt
        label="Interest"
        min={2}
        max={18}
        defaultValue={data.Interest}
        value={data.Interest}
        step={1}
        onChange={(e, value) => setData({
          ...data,
          Interest: value
        })}
        unit="%"
        amount={data.Interest}
      />

    </>
  )
}

export default SliderSelect