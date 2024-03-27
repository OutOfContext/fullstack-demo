package de.neuefische.raffael.backend.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;


@Entity(name = "board")
@Data
public class Board {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String displayName;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Lane> lanes = new ArrayList<>(0);
}
