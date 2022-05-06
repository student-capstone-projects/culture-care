# Culture Care

*Culturally aware services app*

## Introduction

Migrants with English as a second language or from a non-English speaking
background potentially need language and cultural support for daily living.
Migrants without family support and local networks may often feel isolated. We
are here to provide culturally and linguistically appropriate support services
for them. Support services includes:

* Nanny / babysitting service
* Housekeeping / domestic cleaning service
* Meal preparation
* Transport / pick up and drop off arrangement
* Interpreting / translation
* Language other than English learning

There are three type of users of the app, they are:

* the service providers
* the clients and
* the Culture Care WA


## Common Functionality

* Registration.  When a users sign up for the app they will be able to select
  the role, either provider or client.  The account will then be verified by
  Culture Care WA.

* Log in.  Verified users will be able to log into the application. Initially by
  entering there email, but other possibilities  include mobile phone number
  OTP, Google, or Facebook account or some combination providing two factor authentication.

## Role Based Functionality

### Clients

The clients will search for a service filter on location and preferred times
listed and either obtain details of providers or book the service through
the app.

* Add/Edit personal information - Once verified users will be able to manage
  their profile.  This includes their preferred language, locality of service,
  and preferred times.

* Multiple service list – The customer can search through the list of services
  available.

* Cost estimation – The cost of the service can be calculated prior to the
  service booking.

### Service Provider

Service provides who need to connect with the customers have separate functions
to manage the process. Once verified they can use the application to share the
service they provide and accept bookings directly from the customers.  Some of
the features tailored to match the needs of the professionals are,

* Add/Edit personal information – The service provider will need to register
  themselves on the platform. After verification by Culture Care WA they
  will be able to add, change or remove their details.

* Payout method – The professionals are able to receive the payments for their
  service online payment integrations.

* Service Requests – This feature allows the handymen to accept or reject the
  service requests from the customers. If they cancel the request, they need to
  mention the reason for cancellation by either using the list of options given
  or they can type manually.

### Admin panel

The Admin panel contains some unique set of features like,

* Bookings management – The admin can track the current and past booking
  details along with the professional’s details and User’s details. They are
  also able to see the fare amount for the recent and past services via
  bookings management feature.

* Manage customers and professionals – This feature enables the admin to add,
  remove, or even warn the professionals who have bad reputations among the
  customers. Also they can ban or unban the customers from the platform.

* Site management – The admin has complete access over the platform, they can
  change the website’s logo, content, and some technical elements like URL, meta
  description, etc.

* Cancellation details – This feature in the services admin panel allows the
  admin to view the canceled bookings and the reason for cancellation.

* Manage notifications – Admin can send the push notifications to both customers
  and the professionals regarding any important announcements, Festive wishes,
  offers, etc.

* Some other features that can also be included in the admin panel are earning
  reports management, managing service categories, analytics, etc.

## Implementation Overview

This a Progressive Web Application being developed on Google's
[Firebase](https://firebase.google.com/) platform.  Firebase is
a platform for creating mobile and web applications. This application uses authentication, database and hosting features of the platform. All other
functionality has been developed in HTML, CSS and Javascript.
