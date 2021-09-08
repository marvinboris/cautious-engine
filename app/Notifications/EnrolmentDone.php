<?php

namespace App\Notifications;

use App\Models\Enrolment;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class EnrolmentDone extends Notification
{
    use Queueable;

    public $enrolment;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(Enrolment $enrolment)
    {
        $this->enrolment = $enrolment;
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
        ->greeting('Hello, ' . $this->enrolment->name . '!')
        ->line('You have registered to the ' . $this->enrolment->course->name[env('MIX_DEFAULT_LANG', 'en')] . ' course.')
        ->line('Your reference number is ' . $this->enrolment->ref . '.')
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
            'enrolment_id' => $this->id,
            'name' => $this->enrolment->name,
            'course' => $this->enrolment->course,
            'method' => $this->enrolment->method,
        ];
    }
}
