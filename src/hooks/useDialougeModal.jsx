import { useCallback, useState } from "react";

export const useDialogModal = (Component) => {
  const [open, setOpen] = useState(false);

  const openDialog = useCallback(() => {
    setOpen(true);
  }, []);

  const DialogComponent = useCallback(
    ({ ...props }) => {
      if (!open) return null;

      if (Component) {
        return (
          <Component open={open} onClose={() => setOpen(false)} {...props} />
        );
      }
    },
    [open, Component]
  );

  return [DialogComponent, openDialog];
};

// import { useCallback, useState } from "react";

// export const useDialogModal = (Component) => {
//   if (!Component) {
//     throw new Error("A valid component must be provided to useDialogModal.");
//   }

//   const [open, setOpen] = useState(false);

//   const openDialog = useCallback(() => {
//     setOpen(true);
//   }, []);

//   const closeDialog = useCallback(() => {
//     setOpen(false);
//   }, []);

//   const DialogComponent = useCallback(
//     (props) => {
//       if (!open) return null;

//       return <Component open={open} onClose={closeDialog} {...props} />;
//     },
//     [open, Component, closeDialog]
//   );

//   return [DialogComponent, openDialog, closeDialog];
// };
