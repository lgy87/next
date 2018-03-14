```js
<>
  <Bar>
    <BarItem value="15%" text="15%" tooltip="80" />
    <BarItem value="25%" bg="#817fe3" tooltip="25%" />
    <BarItem value="35%" text="customized" bg="#aaa9eb" />
    <BarItem value="15%" bg="#e85600" color="#f5f6f7" />
  </Bar>
</>
```
```js
<>
  <Bar
    items={[
      {value: "10%", bg: "#ccc"},
      {value: "20%", bg: "#999"},
      {value: "30%", bg: "#bbb"},
      {value: "20%", bg: "#fff", color: "#e85600"},
    ]}
  />
</>
```