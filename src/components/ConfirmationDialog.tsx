import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "./ui/button";
import { ReactNode } from "react";

type ConfirmationDialogProps = {
  descriptionText: string;
  onConfirm: () => void;
  triggerText: ReactNode;
};

const ConfirmationDialog = ({
  descriptionText,
  triggerText,
  onConfirm,
}: ConfirmationDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger className="bg-white h-10">{triggerText}</DialogTrigger>
      <DialogContent>
        <DialogHeader className="font-bold">
          Are you absolutely sure?
        </DialogHeader>
        <DialogDescription>{descriptionText}</DialogDescription>
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              type="button"
              className="bg-black text-white"
              onClick={() => {
                onConfirm(); // Execute the confirm action
              }}
            >
              Confirm
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmationDialog;
