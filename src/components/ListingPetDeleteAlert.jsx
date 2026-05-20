"use client";
import { AlertDialog, Button } from "@heroui/react";
import { toast } from "sonner";
const ListingPetDeleteAlert = ({petId}) => {

    const handleDeleteListingPet = async()=>{
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/addpet/${petId}`,{
            method:"DELETE",
            headers:{
                'content-type':'application/json' 
            }
        })
        const data = await res.json()
        toast.success('Pet deleted successfully!')
        console.log(data,'delete data');
        window.location.reload()
    }

  return (
    <AlertDialog>
      <Button className="rounded-full cursor-pointer bg-linear-to-r from-green-600 to-emerald-500 px-5 py-2 text-sm font-bold text-white shadow-lg transition hover:scale-105">
                  Delete
                </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete This Pet?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Footer>
              <Button  onClick={handleDeleteListingPet} slot="close" variant="danger">
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default ListingPetDeleteAlert;
