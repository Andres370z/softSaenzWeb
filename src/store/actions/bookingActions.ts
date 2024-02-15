import { createAction, props } from "@ngrx/store";

// getReservationCartService
export const loadingBooking = createAction('[Booking] loadingBooking',props<{ item: any}>());
export const dataBookingSucess = createAction('[Booking] setBooking',props<{ Booking: any}>());
export const BookingError = createAction('[Booking] BookingError',props<{payload: any}>());
//postReservationCartService
export const loadingCreateBooking = createAction('[Booking] loadingCreateBooking', props<{item: any}>());
export const dataCreateBookingSucess = createAction('[Booking] setCreateBooking',props<{ Booking: any}>());
export const CreateBookingError = createAction('[Booking] BookingError',props<{payload: any}>());
//BookingAdmin
export const loadingBookingAdmin = createAction('[BookingAdmin] loadingBookingAdmin', props<{item: any}>());
export const dataBookingAdminSucess = createAction('[BookingAdmin] setBookingAdmin',props<{ BookingAdmin: any}>());
export const bookingAdminError = createAction('[BookingAdmin] BookingAdminError',props<{payload: any}>());
//BookingConsultFull
export const loadingBookingConsultFull = createAction('[Booking] loadingBookingConsultFull', props<{item: string}>());
export const dataBookingConsultFullSucess = createAction('[Booking] setBookingConsultFull',props<{ BookingConsultFull: any}>());
export const bookingConsultFullError = createAction('[Booking] BookingConsultFullError',props<{payload: any}>());
//EditBooking
export const loadingEditBooking = createAction('[Booking] loadingEditBooking', props<{id: number, item: string}>());
export const dataEditBookingSucess = createAction('[Booking] setEditBooking',props<{ EditBooking: any}>());
export const editBookingError = createAction('[Booking] EditBookingError',props<{payload: any}>());
//DetailBooking
export const loadingDetailBooking = createAction('[Booking] loadingDetailBooking', props<{item: number}>());
export const dataDetailBookingSucess = createAction('[Booking] setDetailBooking',props<{ DetailBooking: any}>());
export const detailBookingError = createAction('[Booking] DetailBookingError',props<{payload: any}>());
//BookingShow
export const loadingBookingShow = createAction('[Booking] loadingBookingShow', props<{item: number}>());
export const dataBookingShowSucess = createAction('[Booking] setBookingShow',props<{ BookingShow: any}>());
export const bookingShowError = createAction('[Booking] BookingShowError',props<{payload: any}>());
//DetailShow
export const loadingDetailShow = createAction('[Booking] loadingDetailShow', props<{item: any}>());
export const dataDetailShowSucess = createAction('[Booking] setDetailShow',props<{ DetailShow: any}>());
export const detailShowError = createAction('[Booking] DetailShowError',props<{payload: any}>());
