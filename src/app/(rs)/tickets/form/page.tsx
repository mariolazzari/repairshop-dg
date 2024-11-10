import { getCustomer } from "@/lib/queries/getCustomer";
import { getTicket } from "@/lib/queries/getTicket";
import { TicketFormProps } from "./TicketFormProps";
import NotFound from "@/components/NotFound";

async function TicketFormPage({ searchParams }: TicketFormProps) {
  const { customerId, ticketId } = await searchParams;

  if (!customerId && !ticketId) {
    return <NotFound title="Customer Id or Ticket Id required" />;
  }

  if (customerId) {
    const customer = await getCustomer(+customerId);
    if (!customer) {
      return <NotFound title={`Customer Id ${customerId} not found`} />;
    }

    if (!customer.active) {
      return <NotFound title={`Customer Id ${customerId} must be active`} />;
    }

    // return ticket form
    console.log(customer);
  }

  if (ticketId) {
    // edit ticket
    const ticket = await getTicket(+ticketId);
    if (!ticket) {
      return <NotFound title={`Ticket id ${ticketId} not fouud`} />;
    }

    const customer = await getCustomer(ticket.customerId);
    // return ticket form
    console.log("ticket", ticket, customer);
  }

  return <div>TicketFormPage</div>;
}

export default TicketFormPage;
