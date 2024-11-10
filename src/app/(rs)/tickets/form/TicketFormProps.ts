import { PageProps } from "@/types/PageProps";

export type TicketFormProps = PageProps<
  void,
  {
    customerId: string;
    ticketId: string;
  }
>;
