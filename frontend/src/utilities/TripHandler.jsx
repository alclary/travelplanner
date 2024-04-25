import { postData, getData, patchData, deleteData } from "./ApiService.jsx";

/**
 * createTrip adds a new Trip to the Database.
 * The return value is the response from the server in JSON format.
 * @param {string} name - The name of the new Trip.
 * @param {string} description - The description of the new Trip.
 * @param {number} user_id - An ID of the User creating the new Trip.
 */
function createTrip(name, description, user_id) {
  const newTrip = {
    name: name,
    description: description,
    user_id: user_id,
  };

  return postData("/trip", {}, newTrip);
}

/**
 * addExperienceToTrip adds a new Experience to an existing Trip in the Database.
 * The return value is the response from the server in JSON format.
 * @param {number} tripId - The ID of the Trip.
 * @param {number} experienceId - An ID of the Experience being added to the Trip.
 */
function addExperienceToTrip(tripId, experienceId) {
  return postData("/trip/" + tripId, { expId: experienceId }, {});
}

/**
 * getTrips returns Trips matching the search parameters from the Database.
 * The return value is the response from the server in JSON format.
 * @param {JSON} searchParams - The optional search parameters for desired Trip(s).
 */
function getTrips(searchParams = {}) {
  return getData("/trip", searchParams);
}

/**
 * getTripExperiences returns Experiences belonging to a Trip from the Database.
 * The return value is the response from the server in JSON format.
 * @param {number} tripId - The ID of the Trip whose Experiences will be returned.
 */
function getTripExperiences(tripId) {
  return getData("/trip/" + tripId);
}

/**
 * editTrip modifies an existing Trip in the Database. This is used to change a Trip's
 * name or description, not to add/remove Experiences from a Trip.
 * The return value is the response from the server in JSON format.
 * @param {number} id - The ID of the Trip being modified.
 * @param {JSON} newData - The key/value pairs being modified.
 */
function editTrip(id, newData = {}) {
  const idObj = { id: id };
  const oldTrip = getTrips(idObj);

  const newTrip = Object.keys(newData).length
    ? { ...idObj, ...newData }
    : oldTrip;

  return patchData("/trip", newTrip);
}

/**
 * deleteTrip removes an existing Trip in the Database.
 * The return value is the response from the server in JSON format.
 * @param {number} id - The ID of the Trip being deleted.
 */
function deleteTrip(id) {
  return deleteData("/trip", { id: id });
}

/**
 * removeExperienceFromTrip removes an Experience to from an existing Trip in the Database.
 * The return value is the response from the server in JSON format.
 * @param {number} tripId - The ID of the Trip.
 * @param {number} experienceId - An ID of the Experience being removed from the Trip.
 */
function removeExperienceFromTrip(tripId, experienceId) {
  return deleteData("/trip/" + tripId, { expId: experienceId }, {});
}

export {
  createTrip,
  addExperienceToTrip,
  editTrip,
  getTrips,
  getTripExperiences,
  deleteTrip,
  removeExperienceFromTrip,
};