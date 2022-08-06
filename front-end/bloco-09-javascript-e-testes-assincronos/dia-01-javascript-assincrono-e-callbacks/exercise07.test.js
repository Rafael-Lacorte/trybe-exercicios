const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
  };
  
  it('uppercase "test" to equal "TEST"', (done) => { 
    uppercase('test', (strUpperCase) => { 
      try { 
        expect(strUpperCase).toBe('TEST');
        done();
      } catch (error) {
        done(error);
      }
    });
  });