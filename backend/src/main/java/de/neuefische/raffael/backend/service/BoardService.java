package de.neuefische.raffael.backend.service;

import de.neuefische.raffael.backend.model.Board;
import de.neuefische.raffael.backend.repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Slf4j
@RequiredArgsConstructor
public class BoardService {

    private final BoardRepository boardRepository;

    public List<Board> getAllBoards() {
        return boardRepository.findAll();
    }

    public Board getBoardWithId(long id) {
        Optional<Board> maybeBoard = boardRepository.findById(id);
        return maybeBoard.orElse(null);
    }
}
