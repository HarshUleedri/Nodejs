const greet = (name) => {
  console.log(`Hi, ${name}. Good to see you`);
};

module.exports = greet; // this how you export using module.exports in the old nodejs

// if you  want to export multiple thing you export it using objec { greet1, greet2}
