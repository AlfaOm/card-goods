import React, { useState } from "react";
import Button from "/src/button/button";
import { Label, Input } from "./styled";

export default function Order() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const onChange = (evt, setChange) => setChange(evt.target.value);
  const isButtonEnable = name && phone && address;

  return (
    <form method="GET" action="/">
      <Label>
        Имя:{" "}
        <Input
          type="name"
          name="name"
          value={name}
          placeholder="ФИ"
          onChange={(e) => onChange(e, setName)}
        />
      </Label>
      <Label>
        Телефон:{" "}
        <Input
          type="tel"
          name="phone"
          value={phone}
          placeholder="+78008808855"
          onChange={(e) => onChange(e, setPhone)}
        />
      </Label>
      <Label>
        Адрес доставки:{" "}
        <Input
          type="address"
          name="address"
          value={address}
          placeholder="город, улица, дом, подъезд"
          onChange={(e) => onChange(e, setAddress)}
        />
      </Label>
      <Button
        disabled={!isButtonEnable}
        onClick={(evt) => {
          evt.preventDefault();
          console.log(
            `${name}, спасибо за заказ. Мы доставим его как можно скорее по адресу: ${address}`
          );
        }}
      >
        Оформить
      </Button>
    </form>
  );
}
