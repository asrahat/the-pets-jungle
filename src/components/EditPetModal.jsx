"use client";

import { Edit } from "lucide-react";
import { FaPlus } from "react-icons/fa";

import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  Modal,
  Select,
  Surface,
  TextArea,
  TextField,
} from "@heroui/react";

const EditPetModal = ({ pet }) => {
  console.log(pet, "pet");

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const updatedPet = Object.fromEntries(formData.entries());

    console.log(updatedPet);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/addpet/${pet._id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedPet),
      }
    );

    const data = await res.json();
    console.log(data);
    window.location.reload()
  };

  return (
    <div>
      <Modal>
        <Button className="rounded-full cursor-pointer bg-linear-to-r from-green-600 to-emerald-500 px-5 py-2 text-sm font-bold text-white shadow-lg transition hover:scale-105">
          Edit
        </Button>

        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-xl">
              <Modal.CloseTrigger />

              <Modal.Header>
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                  <Edit className="size-5" />
                </Modal.Icon>

                <Modal.Heading>Edit Pet</Modal.Heading>
              </Modal.Header>

              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form
                    onSubmit={onSubmit}
                    className="space-y-10 p-6 md:p-10"
                  >
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                
                      <div className="md:col-span-2">
                        <TextField defaultValue={pet.petName} name="petName" isRequired>
                          <Label className="mb-2 text-sm font-bold text-slate-700">
                            Pet Name
                          </Label>

                          <Input
                            
                            placeholder="Luna"
                            className="rounded-2xl w-full"
                          />

                          <FieldError />
                        </TextField>
                      </div>

                      <div>
                        <Select
                          name="category"
                          isRequired
                          className="w-full"
                          placeholder="Select category"
                          defaultValue={pet?.category}
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

                      <TextField defaultValue={pet?.breed} name="breed" isRequired>
                        <Label className="mb-2 text-sm font-bold text-slate-700">
                          Breed
                        </Label>

                        <Input
                          
                          placeholder="Golden Retriever"
                          className="rounded-2xl w-full"
                        />

                        <FieldError />
                      </TextField>

                      <TextField defaultValue={pet?.age} name="age" type="number" isRequired>
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

                      <TextField
                        defaultValue={pet?.adoptionFee}
                        name="adoptionFee"
                        type="number"
                        isRequired
                      >
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

                      <TextField  defaultValue={pet?.location} name="location" isRequired>
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
                          defaultValue={pet?.gender}
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
                          defaultValue={pet?.health}
                        >
                          <Label className="mb-2 text-sm font-bold text-slate-700">
                            Health Status
                          </Label>

                          <Select.Trigger className="h-14 rounded-2xl border border-slate-200 bg-white shadow-sm">
                            <Select.Value />
                            <Select.Indicator />
                          </Select.Trigger>

                          <Select.Popover>
                            <ListBox>
                              <ListBox.Item
                                id="Vaccinated"
                                textValue="Vaccinated"
                              >
                                Vaccinated
                                <ListBox.ItemIndicator />
                              </ListBox.Item>

                              <ListBox.Item
                                id="Special Care"
                                textValue="Special Care"
                              >
                                Special Care
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                            </ListBox>
                          </Select.Popover>
                        </Select>
                      </div>

                      <div className="md:col-span-2">
                        <TextField   defaultValue={pet?.petImage} name="petImage" isRequired>
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
                        <TextField   defaultValue={pet?.shortDescription} name="shortDescription" isRequired>
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
              <Modal.Footer>
                <Button
                  slot="close"
                  className="text-green-600 bg-white shadow-2xl transition hover:scale-[1.01]"
                >
                  Cancel
                </Button>

                <Button
                type="submit"
                  slot="close"
                  className="bg-linear-to-r from-green-600 to-emerald-500 text-lg font-bold text-white shadow-2xl transition hover:scale-[1.01]"
                >
                  Edit
                </Button>
              </Modal.Footer>
                   
                  </form>
                </Surface>
              </Modal.Body>

             
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default EditPetModal;