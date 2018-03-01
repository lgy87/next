```js
<>
  <Badge>Notifications</Badge>
  <Badge value="2" text="Notifications" />
  <Badge value="42">Notifications</Badge>
  <Badge value="999">Notifications</Badge>
</>
```
```js
<>
  <Button badge>Button</Button>
  <Button badge badgeValue="42">Button</Button>
  <Button badge badgeValue={999}>Button</Button>
  <Button badge="42">Button</Button>
  <Button badge={999}>Button</Button>
</>
```

<style>
  span.badge {
    margin-right: 40px;
  }
  .btn.badge {
    margin-right: 30px;
  }
</style>