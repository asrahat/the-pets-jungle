'use client'
import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  Select,
  TextArea,
  TextField,
} from "@heroui/react";

import { FaPaw, FaPlus } from "react-icons/fa";

const AddPetPage = () => {
  const onSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const addPet = Object.fromEntries(formData.entries());
    // console.log(addPet);

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/addpet`,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(addPet)
    })
    const data= await res.json()
    // console.log(data,'data');


  };
  return (
    <div className="min-h-screen w-full bg-linear-to-br from-green-50 via-white to-emerald-100 px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-5 py-2 text-sm font-bold text-green-700 shadow-sm">
            <FaPaw />
            Add New Pet
          </div>

          <h1 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
            Give a Pet a{" "}
            <span className="bg-linear-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              Loving Home
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Share your adorable pet with thousands of loving families looking
            for their perfect companion.
          </p>
        </div>

        <div className="overflow-hidden rounded-[40px] border border-white/30 bg-white/60 shadow-2xl backdrop-blur-2xl">
          <div className="relative overflow-hidden bg-linear-to-r from-green-600 to-emerald-500 px-10 py-12">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

            <div className="absolute -bottom-10 left-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

            <div className="relative z-10">
              <h2 className="text-3xl font-black text-white">
                Pet Information
              </h2>

              <p className="mt-2 text-green-50">
                Fill in the details below to list your pet for adoption.
              </p>
            </div>
          </div>
          <form onSubmit={onSubmit} className="space-y-10 p-6 md:p-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="md:col-span-2">
                <TextField name="petName" isRequired>
                  <Label className="mb-2 text-sm font-bold text-slate-700">
                    Pet Name
                  </Label>

                  <Input placeholder="Luna" className="rounded-2xl w-full" />

                  <FieldError />
                </TextField>
              </div>

              <div>
                <Select
                  name="category"
                  isRequired
                  className="w-full"
                  placeholder="Select category"
                >
                  <Label className="mb-2 text-sm font-bold text-slate-700">
                    Pet Category
                  </Label>

                  <Select.Trigger className="h-14 rounded-2xl border border-slate-200 bg-white shadow-sm">
                    <Select.Value />

                    <Select.Indicator />
                  </Select.Trigger>

                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="Dog" textValue="Dog">
                        Dog
                        <ListBox.ItemIndicator />
                      </ListBox.Item>

                      <ListBox.Item id="Cat" textValue="Cat">
                        Cat
                        <ListBox.ItemIndicator />
                      </ListBox.Item>

                      <ListBox.Item id="Rabbit" textValue="Rabbit">
                        Rabbit
                        <ListBox.ItemIndicator />
                      </ListBox.Item>

                      <ListBox.Item id="Bird" textValue="Bird">
                        Bird
                        <ListBox.ItemIndicator />
                      </ListBox.Item>

                      <ListBox.Item id="Fish" textValue="Fish">
                        Fish
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              <TextField name="breed" isRequired>
                <Label className="mb-2 text-sm font-bold text-slate-700">
                  Breed
                </Label>

                <Input
                  placeholder="Golden Retriever"
                  className="rounded-2xl w-full"
                />

                <FieldError />
              </TextField>

              <TextField name="age" type="number" isRequired>
                <Label className="mb-2 text-sm font-bold text-slate-700">
                  Age
                </Label>

                <Input
                  type="number"
                  placeholder="2"
                  className="rounded-2xl w-full"
                />

                <FieldError />
              </TextField>

              <TextField name="adoptionFee" type="number" isRequired>
                <Label className="mb-2 text-sm font-bold text-slate-700">
                  Adoption Fee ($)
                </Label>

                <Input
                  type="number"
                  placeholder="80"
                  className="rounded-2xl w-full"
                />

                <FieldError />
              </TextField>

              <TextField name="location" isRequired>
                <Label className="mb-2 text-sm font-bold text-slate-700">
                  Location
                </Label>

                <Input
                  placeholder="Dhaka, Bangladesh"
                  className="rounded-2xl w-full"
                />

                <FieldError />
              </TextField>

              <div>
                <Select
                  name="gender"
                  isRequired
                  className="w-full"
                  placeholder="Select gender"
                >
                  <Label className="mb-2 text-sm font-bold text-slate-700">
                    Gender
                  </Label>

                  <Select.Trigger className="h-14 rounded-2xl border border-slate-200 bg-white shadow-sm">
                    <Select.Value />

                    <Select.Indicator />
                  </Select.Trigger>

                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="Male" textValue="Male">
                        Male
                        <ListBox.ItemIndicator />
                      </ListBox.Item>

                      <ListBox.Item id="Female" textValue="Female">
                        Female
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              <div>
                <Select
                  name="health"
                  isRequired
                  className="w-full"
                  placeholder="Health status"
                >
                  <Label className="mb-2 text-sm font-bold text-slate-700">
                    Health Status
                  </Label>

                  <Select.Trigger className="h-14  rounded-2xl border border-slate-200 bg-white shadow-sm">
                    <Select.Value />

                    <Select.Indicator />
                  </Select.Trigger>

                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="Vaccinated" textValue="Vaccinated">
                        Vaccinated
                        <ListBox.ItemIndicator />
                      </ListBox.Item>

                      <ListBox.Item id="Special Care" textValue="Special Care">
                        Special Care
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              <div className="md:col-span-2">
                <TextField name="petImage" isRequired>
                  <Label className="mb-2 text-sm font-bold text-slate-700">
                    Pet Image URL
                  </Label>

                  <Input
                    type="url"
                    placeholder="https://example.com/pet.jpg"
                    className="rounded-2xl w-full"
                  />

                  <FieldError />
                </TextField>
              </div>

              <div className="md:col-span-2">
                <TextField name="shortDescription" isRequired>
                  <Label className="mb-2 text-sm font-bold text-slate-700">
                    Description
                  </Label>

                  <TextArea
                    placeholder="Friendly and playful pet looking for a loving home..."
                    className="rounded-3xl"
                    classNames={{
                      inputWrapper:
                        "rounded-3xl border border-slate-200 bg-white shadow-sm hover:border-green-400",
                    }}
                  />

                  <FieldError />
                </TextField>
              </div>
            </div>

            <Button
              type="submit"
              radius="full"
              className="h-16 w-full bg-linear-to-r from-green-600 to-emerald-500 text-lg font-bold text-white shadow-2xl transition hover:scale-[1.01]"
            >
              <FaPlus />
              Add Pet
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPetPage;
