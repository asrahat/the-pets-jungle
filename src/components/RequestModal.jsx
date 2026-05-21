"use client";

import { useState } from "react";
import { Rocket } from "@gravity-ui/icons";
import { Button, Modal } from "@heroui/react";
import { toast } from "sonner";

const RequestModal = ({ adoptings = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [requests, setRequests] = useState(adoptings);

  const openModal = () => setIsOpen(true);

  const formatDate = (date) =>
    date ? new Date(date).toLocaleDateString() : "N/A";

  const updateStatus = (id, status) => {
    setRequests((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, status } : item
      )
    );

    if (status === "approved") {
      toast.success("Request approved successfully 🐶");
    } else if (status === "rejected") {
      toast.error("Request rejected ❌");
    }
  };

  return (
    <>
      <Button
        onPress={openModal}
        className="rounded-full bg-gradient-to-r from-green-600 to-emerald-500 px-5 py-2 text-sm font-bold text-white shadow-lg transition hover:scale-105"
      >
        Requests
      </Button>

      <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
        <Modal.Backdrop>
          <Modal.Container>
            <Modal.Dialog className="sm:max-w-[560px] rounded-2xl">

              <Modal.CloseTrigger />

              <Modal.Header className="pb-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-emerald-100 text-emerald-600">
                   
                  </div>

                  <Modal.Heading className="text-lg font-bold">
                    Adoption Requests
                  </Modal.Heading>
                </div>
              </Modal.Header>

              <Modal.Body>
                <div className="space-y-4 mt-3 max-h-[400px] overflow-y-auto pr-1">

                  {requests.length === 0 ? (
                    <p className="text-sm text-gray-500 text-center">
                      No requests found
                    </p>
                  ) : (
                    requests.map((adopt) => (
                      <div
                        key={adopt._id}
                        className="rounded-xl  bg-white shadow-sm p-4 hover:shadow-md transition"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h2 className="font-semibold text-gray-800">
                              {adopt.userName}
                            </h2>
                            <p className="text-xs text-gray-500">
                              {adopt.userEmail}
                            </p>
                          </div>

                          <div>
                            {adopt.status === "pending" && (
                              <span className="px-3 py-1 text-xs rounded-full bg-yellow-100 text-yellow-700 font-medium">
                                Pending
                              </span>
                            )}

                            {adopt.status === "approved" && (
                              <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700 font-medium">
                                Approved
                              </span>
                            )}

                            {adopt.status === "rejected" && (
                              <span className="px-3 py-1 text-xs rounded-full bg-red-100 text-red-700 font-medium">
                                Rejected
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="mt-3 text-sm text-gray-600">
                          <p>
                            <span className="font-medium">Pickup:</span>{" "}
                            {formatDate(adopt.pickupDate)}
                          </p>
                        </div>

                        {adopt.status === "pending" && (
                          <div className="flex gap-2 mt-4">
                            <Button
                              onPress={() =>
                                updateStatus(adopt._id, "approved")
                              }
                              className="flex-1 bg-green-600 text-white hover:bg-green-700"
                            >
                              Approve
                            </Button>

                            <Button
                              onPress={() =>
                                updateStatus(adopt._id, "rejected")
                              }
                              className="flex-1 bg-red-500 text-white hover:bg-red-600"
                            >
                              Reject
                            </Button>
                          </div>
                        )}
                      </div>
                    ))
                  )}

                </div>
              </Modal.Body>

              

            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </>
  );
};

export default RequestModal;