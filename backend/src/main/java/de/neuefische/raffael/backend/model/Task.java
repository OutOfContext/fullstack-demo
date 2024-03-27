package de.neuefische.raffael.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.Generated;

import java.util.ArrayList;
import java.util.List;

@Entity(name = "task")
@Data
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String title;
    private String subTitle;
    private String description;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "assignee")
    private Account assignee;

    @ManyToMany(cascade = CascadeType.ALL)
    private List<Account> participants = new ArrayList<>(0);
    private State state; // Open, In Progress, Closed


}
