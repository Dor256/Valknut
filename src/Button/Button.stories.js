import React from "react";
import { Button } from './Button';

export default {
  title: "Button"
};

export const Regular = () => <Button>Regular</Button>;

export const Blue = () => <Button color='blue'>Blue</Button>;

export const Green = () => <Button color='green'>Green</Button>;

export const Clickable = () => <Button onClick={() => alert("It Clicks!")}>Click Me!</Button>;