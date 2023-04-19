abstract class Fighter {
    private String type = "Fighter";
    boolean vulnerability = false;

    boolean isVulnerable() {
        return vulnerability;
    }

    @Override
    public String toString() {
        return "Fighter is a " + this.type;
    }

    abstract int damagePoints(Fighter fighter);

}

class Warrior extends Fighter {
    private String type = "Warrior";

    @Override
    public String toString() {
        return "Fighter is a " + this.type;
    }

    @Override
    int damagePoints(Fighter wizard) {
        return wizard.isVulnerable() ? 10 : 6;
    }
}

class Wizard extends Fighter {
    private String type = "Wizard";
    private boolean vulnerability = true;

    @Override
    public String toString() {
        return "Fighter is a " + this.type;
    }

    @Override
    boolean isVulnerable() {
        return vulnerability;
    }

    @Override
    int damagePoints(Fighter warrior) {
        return this.isVulnerable() ? 3 : 12;
    }

    void prepareSpell() {
        this.vulnerability = false;
    }

}
