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
```js
<>
  <Avatar badge="4" xl src="https://avatars3.githubusercontent.com/u/17808424?s=460&v=4" />
  <Avatar badge badgeValue="4" lg src="https://avatars3.githubusercontent.com/u/17808424?s=460&v=4" />
  <Avatar badge badgeValue={4}   src="https://avatars3.githubusercontent.com/u/17808424?s=460&v=4" />
  <Avatar badge="4" sm src="https://avatars3.githubusercontent.com/u/17808424?s=460&v=4" />
  <Avatar badge={4} xs src="https://avatars3.githubusercontent.com/u/17808424?s=460&v=4" />
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