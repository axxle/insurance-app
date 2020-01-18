package ru.axxle.insurance;

public enum RealtyType {
    /*
    @JsonProperty("distance-in-km")
    KILOMETER("km", 1000),
    @JsonProperty("distance-in-miles")
    MILE("miles", 1609.34);
    */
    APARTMENT("квартира"),
    HOUSE("дом"),
    ROOM("комната");

    private String ruName;

    RealtyType(String ruName) {
        this.ruName = ruName;
    }

    public String getRuName() {
        return ruName;
    }

    public static RealtyType valueOfRuName(String ruName) {
        for(RealtyType type: values()) {
            if(type.getRuName().equals(ruName)) {
                return type;
            }
        }
        return null;
    }
}
