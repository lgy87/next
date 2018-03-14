```js
<>
  <Step>
    <StepItem>step 1</StepItem>
    <StepItem active>step 2</StepItem>
    <StepItem>step 3</StepItem>
    <StepItem tooltip="step 4's tooltip">step 4</StepItem>
  </Step>
</>
```
```js
<>
  <Step
    items={[
      {tooltip: "i love u", text: "step 1", id: "2015"},
      {tooltip: "i love u", text: "step 2"},
      {tooltip: "i am tooltip", text: "step 3"},
      {active: true, tooltip: "i love u", text: "step 4"},
    ]}
  >
    <StepItem tooltip="this is a tooltip" text="children" />
  </Step>
</>
```