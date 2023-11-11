import { Subjects, Publisher, PaymentCreatedEvent } from '@jutickets/common';


export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
} 