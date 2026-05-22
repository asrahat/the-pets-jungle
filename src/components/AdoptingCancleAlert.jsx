"use client";
import { AlertDialog, Button } from "@heroui/react";
import { toast } from "sonner";
const AdoptingCancleAlert = ({adoptingId}) => {

    const handleCancleAdopting = async()=>{
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/adopting/${adoptingId}`,{
            method:"DELETE",
            headers:{
                'content-type':'application/json' 
            }
        })
        const data = await res.json()
        toast.success('Pet deleted successfully!')
        // console.log(data,'delete data');
        window.location.reload()
    }

  return (
    <AlertDialog>
      <Button
     
        size="sm"
        radius="full"
        variant="bordered"
        className="border-red-200 px-5 font-semibold text-red-500 hover:bg-red-50"
      >
        Cancel
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Cancle This Pet?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Footer>
              <Button  onClick={handleCancleAdopting} slot="close" variant="danger">
                Cancle Pet
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default AdoptingCancleAlert;
