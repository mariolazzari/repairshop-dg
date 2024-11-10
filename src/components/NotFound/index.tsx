import { BackButton } from "../BackButton";
import { NotFoundProps } from "./NotFoundProps";

export default function NotFound({ title }: NotFoundProps) {
  return (
    <>
      <h2>{title}</h2>
      <BackButton title="Back" />
    </>
  );
}
