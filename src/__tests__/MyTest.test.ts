  describe('Meine Tests', () => {
    it('Mein erster Test', () => {
        expect(true).toBe(true);
        expect(process.env.MEINE_UMGEBUNGS_VARIABLE).not.toEqual("Test1234")
    });
});
