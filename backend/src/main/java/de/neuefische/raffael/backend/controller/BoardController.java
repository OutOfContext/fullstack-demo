package de.neuefische.raffael.backend.controller;

import de.neuefische.raffael.backend.model.Board;
import de.neuefische.raffael.backend.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/kanban/boards")
@RequiredArgsConstructor
public class BoardController {

    private final BoardService boardService;
    @GetMapping
    public List<Board> fetchAllBoards(){
        return boardService.getAllBoards();
    }
}
