<template>
  <div class="flex flex-col mt-8">
    <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div
        class="
          align-middle
          inline-block
          min-w-full
          shadow
          overflow-hidden
          sm:rounded-lg
          border-b border-gray-200
        "
      >
        <table class="min-w-full">
          <thead>
            <tr>
              <th
                class="
                  px-6
                  py-3
                  border-b border-gray-200
                  bg-gray-50
                  text-left text-xs
                  leading-4
                  font-medium
                  text-gray-500
                  uppercase
                  tracking-wider
                "
              >
                Status
              </th>
              <th
                class="
                  px-6
                  py-3
                  border-b border-gray-200
                  bg-gray-50
                  text-left text-xs
                  leading-4
                  font-medium
                  text-gray-500
                  uppercase
                  tracking-wider
                "
              >
                Total
              </th>
              <th
                class="
                  px-6
                  py-3
                  border-b border-gray-200
                  bg-gray-50
                  text-left text-xs
                  leading-4
                  font-medium
                  text-gray-500
                  uppercase
                  tracking-wider
                "
              >
                Negative
              </th>
              <th
                class="
                  px-6
                  py-3
                  border-b border-gray-200
                  bg-gray-50
                  text-left text-xs
                  leading-4
                  font-medium
                  text-gray-500
                  uppercase
                  tracking-wider
                "
              >
                Positive
              </th>
              <th
                class="
                  px-6
                  py-3
                  border-b border-gray-200
                  bg-gray-50
                  text-left text-xs
                  leading-4
                  font-medium
                  text-gray-500
                  uppercase
                  tracking-wider
                "
              >
                Death
              </th>
            </tr>
          </thead>

          <tbody class="bg-white">
            <tr v-for="(u, index) in users" :key="index">
              <td class="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full" :src="u.image" />
                  </div>

                  <div class="ml-4">
                    <div class="text-sm leading-5 font-medium text-gray-900">
                      {{ u.name }}
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                {{ u.total }}
              </td>

              <td class="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                <!-- <div class="text-sm leading-5 text-gray-900"> -->
                {{ u.team }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                {{ u.positive }}
              </td>

              <td
                class="
                  px-6
                  py-4
                  whitespace-nowrap
                  border-b border-gray-200
                  text-sm
                  leading-5
                  text-gray-500
                "
              >
                {{ u.death }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamData",
  data() {
    return {
      users: [
        {
          name: "Test Registered",
          total:"7069",
          team: "Digital Marketing",
          positive: "-",
          death: "1000",
          image: "/user/tom.png",
        },
        {
          name: "Result Given",
         total:"3000",
          team: "300",
          positive: "-",
          death: "1000",
          image: "/user/edidiong.png",
        },
        {
          name: "Pending",
         total:"4069",
          team: "-",
          positive: "-",
          death: "1000",
          image: "/user/umaru.png",
        },
      ],
    };
  },
};
</script>

