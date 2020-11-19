export default function nameReducer(name) {
  if (name.split(" ").length !== 2) {
    return "Invalid name"
  }
  return `${name.split(' ')[0]} ${name.split(' ')[1][0]}.`
};