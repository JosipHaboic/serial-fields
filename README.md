# Arduino serial example

## TASK 1. Display data from arduino serial port

Arduino sends simple data in the form of:

```ts
{
    vin: float,
    vout: float,
    duty_cycle: int
}
```

Data event triggers the action in the Vuex store and the UI gets updated.

