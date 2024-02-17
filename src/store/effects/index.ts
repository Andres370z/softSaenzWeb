import {authEffects} from './authEffects';
import { bookingAdminEffects } from './booking/bookingAdminEffects';
import { bookingConsultFullEffects } from './booking/bookingConsultFullEffects';
import { bookingCreationEffects } from './booking/bookingCreationEffects';
import { bookingEffects } from './booking/bookingEffects';
import { bookingEndDetailEffects } from './booking/bookingEndDetailEffects';
import { bookingEndDetailShowEffects } from './booking/bookingEndDetailShowEffects';
import { bookingEndEffects } from './booking/bookingEndEffects';
import { bookingEndShowEffects } from './booking/bookingEndShowEffects';
import {detailEffects} from './detailEffects';
import { productListDetailEffects } from './products/productListDetailEffects';
import { productsCreationEffects } from './products/productsCreationEffects';
import { productsCreationListEffects } from './products/productsCreationListEffects';
import { productsEditProductListEffects } from './products/productsEditProductListEffects';
import { productsEffects } from './products/productsEffects';
import { productsGalleryEffects } from './products/productsGalleryEffects';
import { productsTypeEffects } from './products/productsTypeEffects';
import { proyectsClientsCreationEffects } from './proyectsClients/proyectsClientsCreationEffects';
import { proyectsClientsEffects } from './proyectsClients/proyectsClientsEffects';
import { proyectsClientsFullEffects } from './proyectsClients/proyectsClientsFullEffects';
import { qualityCreationEffects } from './quality/qualityCreationEffects';
import { qualityEffects } from './quality/qualityEffects';
import { reservationCartEffects } from './reservationCart/reservationCartEffects';
import { reservationCreationCartEffects } from './reservationCart/reservationCreationCartEffects';
import { reservationDeleteCartEffects } from './reservationCart/reservationDeleteCartEffects';
import { suppliersCreationEffects } from './suppliers/suppliersCreationEffects';
import { suppliersEditEffects } from './suppliers/suppliersEditEffects';
import { suppliersEffects } from './suppliers/suppliersEffects';
import { suppliersPaginationEffects } from './suppliers/suppliersPaginationEffects';
import { typeProductsCreationEffects } from './typeProducts/typeProductsCreationEffects';
import { typeProductsEffects } from './typeProducts/typeProductsEffects';
import { wayToPayCreationEffects } from './wayToPay/wayToPayCreationEffects';
import { wayToPayEffects } from './wayToPay/wayToPayEffects';

export const EffectsArray: any[] = [
    authEffects, 
    detailEffects, 
    productsEffects, 
    productsEditProductListEffects,
    productsCreationListEffects,
    productsCreationEffects,
    productsTypeEffects,
    productsGalleryEffects,
    productListDetailEffects,
    reservationCartEffects,
    reservationDeleteCartEffects,
    reservationCreationCartEffects,
    typeProductsEffects,
    typeProductsCreationEffects,
    qualityEffects,
    qualityCreationEffects,
    wayToPayEffects,
    wayToPayCreationEffects,
    bookingEffects,
    bookingCreationEffects,
    bookingConsultFullEffects,
    bookingAdminEffects,
    bookingEndEffects,
    bookingEndDetailShowEffects,
    bookingEndShowEffects,
    bookingEndDetailEffects,
    suppliersEffects,
    suppliersEditEffects,
    suppliersCreationEffects,
    suppliersPaginationEffects,
    proyectsClientsCreationEffects,
    proyectsClientsEffects,
    proyectsClientsFullEffects
];