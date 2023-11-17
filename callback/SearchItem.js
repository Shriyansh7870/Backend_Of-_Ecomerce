// class ApiFeatures {
//   constructor(query, queryStr) {
//     this.query = query;
//     this.queryStr = queryStr;
//   }
//   search() {
//     const searchCriteria = {};
//     if (this.queryStr.id) {
//       searchCriteria.id = this.queryStr.id;
//     }

//     if (this.queryStr.name) {
//       searchCriteria.name = {
//         $regex: this.queryStr.name,
//         $options: "i",
//       };
//     }
//     if (this.queryStr.model) {
//       searchCriteria.model = {
//         $regex: this.queryStr.model,
//         $options: "i",
//       };
//     }
//     if (this.queryStr.type) {
//       searchCriteria.type = {
//         $regex: this.queryStr.type,
//         $options: "i",
//       };
//     }
//     if (this.queryStr.category) {
//       searchCriteria.category = {
//         $regex: this.queryStr.category,
//         $options: "i",
//       };
//     }
//     this.query = this.query.find(searchCriteria);

//     return this;
//   }
// }
// module.exports = ApiFeatures;
