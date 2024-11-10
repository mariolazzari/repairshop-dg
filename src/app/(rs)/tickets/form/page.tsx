import { getCustomer } from "@/lib/queries/getCustomer";
import { getTicket } from "@/lib/queries/getTicket";
import { BackButton } from "@/components/BackButton";
import { TicketFormProps } from "./TicketFormProps";

async function TicketFormPage({ searchParams }: TicketFormProps) {
  const { customerId, ticketId } = await searchParams;

  if (!customerId && !ticketId) {
    return (
      <>
        <h2>Customer Id and Ticket Id are mandatory</h2>
        <BackButton title="Back" />
      </>
    );
  }

  if (customerId) {
    const customer = await getCustomer(+customerId);
    if (!customer) {
      return (
        <>
          <h2>Customer Id {customerId} not found</h2>
          <BackButton title="Back" />
        </>
      );
    }

    if (!customer.active) {
      return (
        <>
          <h2>Customer Id {customerId} must be active</h2>
          <BackButton title="Back" />
        </>
      );
    }

    // return ticket form
    console.log(customer);
  }

  if (ticketId) {
    // edit ticket
    const ticket = await getTicket(+ticketId);
    if (!ticket) {
      return (
        <>
          <h2>Ticket Id {ticketId} not found</h2>
          <BackButton title="Back" />
        </>
      );
    }

    const customer = await getCustomer(ticket.customerId);
    // return ticket form
    console.log("ticket", ticket, customer);
  }

  return <div>TicketFormPage</div>;
}

export default TicketFormPage;
