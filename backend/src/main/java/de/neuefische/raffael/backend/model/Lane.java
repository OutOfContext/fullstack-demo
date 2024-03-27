package de.neuefische.raffael.backend.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Entity(name = "lane")
@Data
public class Lane {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String displayName;

    private State state;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Task> taskList = new ArrayList<>(0);
}
