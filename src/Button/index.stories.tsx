import React from "react";
import { Button } from '.';

export default {
  title: "Button"
};

export const Regular = () => <Button>Regular</Button>;

export const Blue = () => <Button color='blue'>Blue</Button>;

export const Green = () => <Button color='green'>Green</Button>;

export const Yellow = () => <Button color='yellow'>Yellow</Button>;

export const Red = () => <Button color='red'>Red</Button>;

export const Clickable = () => <Button onClick={() => alert("It Clicks!")}>Click Me!</Button>;