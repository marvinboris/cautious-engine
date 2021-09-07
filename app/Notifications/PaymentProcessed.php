<?php

namespace App\Notifications;

use App\Models\Payment;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class PaymentProcessed extends Notification
{
    use Queueable;

    public $payment;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(Payment $payment)
    {
        $this->payment = $payment;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail', 'database'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->greeting('Hello, ' . $this->payment->enrolment->name . '!')
            ->line('You have successfully made a ' . $this->payment->amount . ' XAF ' . $this->payment->method->name . ' payment!')
            ->line('You have registered to the ' . $this->payment->enrolment->course->name . ' course.')
            ->line('Thank you for using our application!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            'enrolment_id' => $this->payment->enrolment_id,
            'method_id' => $this->payment->method_id,
            'name' => $this->payment->enrolment->name,
            'course' => $this->payment->enrolment->course,
            'amount' => $this->payment->amount,
            'method' => $this->payment->enrolment->method,
        ];
    }
}
