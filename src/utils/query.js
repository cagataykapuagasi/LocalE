import gql from 'graphql-tag';

const getOrders = ({ limit = 10, index = 0 }) =>
  gql`
    query {
      pastOrders(limit: ${limit}, index: ${index}) {
        status: status
        address: address {
          addressLine1
          addressLine2
          city {
            id
            name
            slugName
            timezone
          }
          country {
            id
            isoCode
            name
            slugName
          }
          flatNumber
          fullName
          geoEnabled
          id
          lat
          lon
          postalCode
          tips
          title
          userAddressId
        }
        orderDate: orderDate
      }
    }
  `;

const getRestaurants = ({ limit = 10, index = 0 }) =>
  gql`
  query {
    restaurants(limit: ${limit}, index: ${index}, showOffline: true, delivery: false ) {
      avgScore
      deal {
        delivery
        id
        int
        min_spend_amount
        reward_percent
        time_frame_id
      }
      delivery
      deliveryFee {
        amount
        freeDeliveryMoreThanAmount
        freeDeliveryMoreThanEnabled
      }
      deliveryReOpenDate
      deliveryType
      distance
      freebie {
        id
        itemCount
        minSpendAmount
        tagName
      }
      inDistance
      isNew
      minOrderAmount
      minOrderEnabled
      name
      open
      picture {
        alt
        bundle
        height
        id
        title
        url
        width
      }
      reOpenDate
      restaurantAddressPostalCode
      restaurantAddressSlugAdminWard
      restaurantAddressSlugCityName
      restaurantCollectionWorkingTimeStatus
      restaurantDeliveryDriverStatus
      restaurantDeliveryStatus
      restaurantDeliveryWorkingTimeStatus
      restaurantItemId
      restaurantNextVacationEndDate
      restaurantNextVacationStartDate
      restaurantNextVacationStatus
      restaurantOpenStatus
      restaurantStatusCode
      restaurantStatusParams
      restaurantWorkingHourOpenTime
      slugName
      types {
        id
        name
      }
      uid
    } 
    }
  `;

export { getOrders, getRestaurants };
